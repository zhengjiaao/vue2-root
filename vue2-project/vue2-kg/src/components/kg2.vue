<template>
  <div class="kg">
    <!-- 左侧面板 -->
    <div class="left-panel">

      <!-- 样式面板 -->
      <button @click="showStylePanel = !showStylePanel">样式</button>

      <div class="layout-panel">
        <h4>布局</h4>
        <!-- add content for layout panel here -->
      </div>
      <div class="component-panel">
        <h4>组件</h4>
        <!-- add content for component panel here -->
        <button @click="zoomIn">放大</button>
        <button @click="zoomOut">缩小</button>
        <button @click="centerFitView">自适应</button>
      </div>
    </div>

    <div class="center-panel">
      <div class="style-panel" v-if="showStylePanel">
        <!-- add content for style panel here -->
        <h4>样式</h4>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </div>
    </div>

    <!-- 右侧面板 -->
    <div class="right-panel">
      <div class="layout-buttons">
        <button :class="{ active: selectedLayout === 'forceAtlas2' }" @click="selectLayout('forceAtlas2')">力导布局</button>
        <button :class="{ active: selectedLayout === 'concentric' }" @click="selectLayout('concentric')">同心圆布局</button>
        <button :class="{ active: selectedLayout === 'radial' }" @click="selectLayout('radial')">切花布局</button>
      </div>
      <h3>{{ msg }}</h3>
      <a v-bind:href="url" target="_blank"> {{ msg }}-示例</a>
      <!-- 画布 -->
      <div id="container" ref="container"></div>
    </div>

  </div>
</template>

<script>
//引入组件
import G6 from '@antv/g6';
import { GraphLayoutPredict } from '@antv/vis-predict-engine';

export default {
  name: 'HelloWorld',

  //数据
  data() {
    return {
      showStylePanel: false,
      msg: 'g6 力导图图布局-Force Atlas 2',
      url: 'https://g6.antv.antgroup.com/zh/examples/net/forceDirected/#basicFA2',
      graph: null, // initialize graph as null
      data: null,  // initialize data as null
      selectedLayout: 'forceAtlas2', // initialize selected layout

    }
  },
  //页面加载时运行的方法
  mounted() {
    console.log("Component mounted...");

    //初始化graph
    this.initGraph();

  },
  //方法
  methods: {

    //初始化graph
    initGraph() {
      const container = document.getElementById('container');
      const width = container.scrollWidth;
      const height = container.scrollHeight || 500;
      // 创建 G6 图实例
      this.graph = new G6.Graph({
        container: 'container',  // 指定图画布的容器 id
        width, // 画布宽高
        height,
        modes: {
          default: ['zoom-canvas', 'drag-canvas', 'drag-node'], // 允许拖拽画布、放缩画布、拖拽节点、设置高亮
        },
        layout: {
          type: 'force',
          preventOverlap: true,
        },
        defaultNode: {
          size: 20,
        },
      });

      fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/relations.json')
        .then((res) => res.json())
        .then((data) => {
          data.nodes.forEach(node => {
            node.x = Math.random() * 1;
          });

          this.graph.on('afterlayout', e => {
            //布局完成后，自适应
            this.graph.fitView()
          })

          //数据
          this.data = data;
          this.graph.data(this.data);
          //渲染数据
          this.graph.render();

          container.addEventListener('dblclick', () => {
            //双击画布，自适应
            this.graph.fitView();
          });

        });
    },

    zoomIn() {
      //放大
      this.graph.zoom(1.2);
    },

    zoomOut() {
      //缩小
      this.graph.zoom(0.8);
    },

    centerFitView() {
      //自适应 画布
      this.graph.fitView();
    },

    changeLayout() {
      // 根据选择的布局类型更新布局
      switch (this.selectedLayout) {
        case 'forceAtlas2':
          //力导布局
          this.graph.updateLayout({
            type: 'forceAtlas2',  //- type: 布局类型，此处为 forceAtlas2，即力导布局
            preventOverlap: true, //是否防止节点重叠，此处为 true
            kr: 10,               //节点之间的斥力大小，此处为 10
            center: [250, 250],   //布局中心点的坐标，此处为 [250, 250]
          });
          break;
        case 'concentric':
          //同心圆布局
          this.graph.updateLayout({
            type: 'concentric', //指定布局类型，这里是 concentric，即同心圆布局
            minNodeSpacing: 10, //节点之间的最小间距，这里是 10
            preventOverlap: true, //是否防止节点重叠，这里是 true
            center: [250, 250], // 布局中心点的坐标，这里是 [250, 250]
          });
          break;
        case 'radial':
          //同心圆中布局
          this.graph.updateLayout({
            type: 'radial', //指定布局类型，这里是 radial，节点排列在同心圆中布局
            unitRadius: 100, //这将每个圆的半径设置为100像素
            preventOverlap: true, //这确保节点不会重叠
            center: [250, 250], // 这将布局的中心设置为画布上的点(250, 250)
            linkDistance: 100, //这将连接节点之间的距离设置为100像素
            maxPreventOverlapIteration: 100, //这将preventOverlap算法的最大迭代次数设置为100
          });
          break;
      }
    },

    selectLayout(layoutType) {
      // 选择布局类型并更新布局
      this.selectedLayout = layoutType;
      this.graph.updateLayout({ type: layoutType });
    },
    async layoutPredict() {
      return await GraphLayoutPredict.predict(this.data);
    },
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kg {
  position: fixed;
  width: 100%;
  height: 100%;
}

.left-panel {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 100%;
  background-color: #9dade8;
}

.center-panel {
  background-color: #d2819e;
  width: 200px;
  height: 100%;
}

.right-panel {
  position: relative;
  right: 0;
  top: 0;
}


/* 列后清除浮动 */
.kg:after {
  content: "";
  display: table;
  clear: both;
}
</style>
