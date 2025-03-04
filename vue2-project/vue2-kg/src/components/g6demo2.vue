<template>
  <div class="kg">
    <h1>{{ msg }}</h1>
    <!-- 图的画布容器 -->
    <div id="mountNode"></div>
  </div>
</template>

<script>
import G6 from '@antv/g6';

export default {
  name: 'kg',
  components: {
    G6
  },
  data() {
    return {
      msg: 'Hello, world!'
    }
  },

  mounted() {
    // 定义数据源
    const data = {
      // 点集
      nodes: [
        {
          id: 'node1',
          label: "label1",
          x: 100,
          y: 200,
        },
        {
          id: 'node2',
          label: "label2",
          x: 300,
          y: 200,
        },
      ],
      // 边集
      edges: [
        // 表示一条从 node1 节点连接到 node2 节点的边
        {
          source: 'node1',
          target: 'node2',
        },
      ],
    };

    // 创建 G6 图实例
    const graph = new G6.Graph({
      container: 'mountNode', // 指定图画布的容器 id，与第 9 行的容器对应
      // 画布宽高
      width: 800,
      height: 500,
      //默认节点配置
      defaultNode: {
        size: 50,
        style: {
          fill: '#C6E5FF',
          stroke: '#5B8FF9'
        }
      },
      //默认关系配置
      defaultEdge: {
        style: {
          stroke: '#e2e2e2'
        }
      },
      //布局配置
      layout: {
        type: 'dagre',
        rankdir: 'LR'
      },
      //启用全局动画
      animate: true
    });
    // 读取数据
    graph.data(data);
    // 渲染图
    graph.render();
  }
}
</script>