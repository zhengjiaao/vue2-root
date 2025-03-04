<template>
  <div class="kg">
    <!-- 工具栏 -->
    <div>


    </div>

    <!-- 图的画布容器 -->
    <div id="container" ref="container"></div>

  </div>
</template>

<script>
import G6 from '@antv/g6';

export default {
  name: 'Kg',
  data() {
    return {
      data: null,
      graph: null
    }
  },
  methods: {
    // mounted() {
    //   window.addEventListener('resize', this.handleResize);
    // },
    // beforeDestroy() {
    //   window.removeEventListener('resize', this.handleResize);
    // },
    // handleResize() {
    //   if (!this.graph || this.graph.get('destroyed')) return;
    //   const container = this.$refs.container;
    //   if (!container || !container.scrollWidth || !container.scrollHeight) return;
    //   this.graph.changeSize(container.scrollWidth, container.scrollHeight);
    // }
  },

  mounted() {

    const container = this.$refs.container;
    const width = container.scrollWidth;
    //如果scrollHeight属性不存在，则高度将默认为500
    const height = container.scrollHeight || 500;
    // 创建 G6 图实例
    this.graph = new G6.Graph({
      container: 'container', // 指定图画布的容器 id，与第 9 行的容器对应
      // 画布宽高
      width,
      height,
      //默认node 样式
      defaultNode: {
        size: 30,
        style: { //填充颜色
          fill: '#C6E5FF',
          stroke: '#5B8FF9'
        }
      },
      defaultEdge: {
        // type: 'line', // 边的类型，默认 line 线型
        style: {
          stroke: '#e2e2e2', //线颜色
          // lineWidth: 1, // 线宽 默认1。值为0时，则不显示线
          endArrow: true,
          endArrow: {
            // 使用内置箭头路径函数，参数为箭头的 宽度、长度、偏移量（默认为 0，与 d 对应）
            path: G6.Arrow.triangle(3, 5, 5),
            d: 4,
            // path: G6.Arrow.triangle(5, 10, 10),
            // d: 8
            // path: 'M 0,0 L 8,4 L 8,-4 Z',
            // fill: '#e2e2e2'
            // fill: '#ccc'
          },
        }
      },
      layout: {
        type: 'fruchterman',
        speed: 10,
        maxIteration: 500,
        //刷新节点位置
        tick: () => {
          //当节点位置发生变化时，刷新所有节点位置，并重计算边的位置
          this.graph.refreshPositions()
        },
        // 是否开启画布自适应, 开启后图自动适配画布大小。
        fitView: true,
        modes: {
          //内置交互行为
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'], // 允许拖拽画布、放缩画布、拖拽节点、设置高亮
        }
      }

    });

    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/relations.json')
      .then((res) => res.json())
      .then((data) => {
        this.data = data;

        this.graph.on('afterlayout', e => {
          this.graph.fitView()
        });

        // 初始化的图数据，是一个包括 nodes 数组和 edges 数组的对象
        this.graph.data(this.data);
        // 渲染图
        this.graph.render();
      })

    //G6 graph 事件
    //刷新拖动节点位置
    function refreshDragedNodePosition(e) {
      const model = e.item.get('model');
      model.fx = e.x;
      model.fy = e.y;
    }

    // 事件 node:dragstart 当节点开始被拖拽时触发，此事件作用在被拖拽节点上
    this.graph.on('node:dragstart', (e) => {
      // 拖动节点时重新布局
      this.graph.layout(); // 无此配置，不能进行推拽
      refreshDragedNodePosition(e);
    });

    // 事件 node:drag 当节点在拖动过程中时触发，此事件作用于被拖拽节点上
    this.graph.on('node:drag', (e) => {
      refreshDragedNodePosition(e);
    });

    // 事件 node:dragend 当拖拽完成后触发，此事件作用在被拖拽节点上
    this.graph.on('node:dragend', (e) => {
      // 拖动节点在拖动完成后重新恢复位置
      // e.item.get('model').fx = null;
      // e.item.get('model').fy = null;
    });

    // 事件 节点左击
    this.graph.on('node:click', function (evt) {
      //获取当前节点数据信息
      console.log('节点左击', evt)

    });

    // 事件 节点右击
    this.graph.on('node:contextmenu', function (evt) {
      //当前节点定位
      console.log('节点右击', evt)

    });

  }

}
</script>