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
    const data = {
      nodes: [
        {
          id: 'node1',
          x: 100,
          y: 200
        },
        {
          id: 'node2',
          x: 300,
          y: 200
        }
      ],
      edges: [
        {
          source: 'node1',
          target: 'node2'
        }
      ]
    }
    const graph = new G6.Graph({
      container: 'mountNode',
      width: 500,
      height: 500,
      modes: {
        default: ['drag-canvas', 'zoom-canvas']
      },
      defaultNode: {
        size: 50,
        style: {
          fill: '#C6E5FF',
          stroke: '#5B8FF9'
        }
      },
      defaultEdge: {
        style: {
          stroke: '#e2e2e2'
        }
      },
      layout: {
        type: 'dagre',
        rankdir: 'LR'
      },
      animate: true,
      data
    })
    graph.render()
  }
}
</script>