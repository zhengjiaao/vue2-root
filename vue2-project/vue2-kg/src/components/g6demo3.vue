<template>
  <div class="kg">
    <h1>{{ msg }}</h1>
    <!-- 动态变更配置 -->
    <div>

      <button @click="addNode">新增节点</button>
      <button @click="deleteNode">删除节点</button>
      <button @click="addEdge">新增关系</button>
      <button @click="deleteEdge">删除关系</button>

      <!-- 待补充： -->
    </div>

    <div>
      <button @click="initData">切花数据源</button>
    </div>

    <!-- 图的画布容器 -->
    <div id="mountNode"></div>
  </div>
</template>

<script>
import G6 from '@antv/g6';

export default {
  name: 'kg',
  data() {
    return {
      msg: 'Hello, world!',
      newnode: {
        id: '',
        label: ''
      },
      data: {
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
      }
    }
  },
  graph: null,

  methods: {

    initData() {
      // 请求数据
      fetch('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json')
        .then(response => response.json()) // 解析为 JSON
        .then(data => {
          // 在这里处理数据
          console.log(data);
          this.data = data;
          this.graph.data(this.data);
          this.graph.render();
        })
        .catch(error => {
          // 处理错误
          console.error(error);
        });
    },

    addNode() {
      // 在数据源中添加新节点
      const newNode = {
        id: 'node3',
        label: 'label3'
      };
      this.data.nodes.push(newNode);
      // 渲染图
      this.graph.render();
    },
    deleteNode() {
      // 从数据源中删除节点
      const nodeIndex = this.data.nodes.findIndex(node => node.id === 'node1');
      this.data.nodes.splice(nodeIndex, 1);
      // 渲染图
      this.graph.render();
    },
    addEdge() {
      // 在数据源中添加新边
    },
    deleteEdge() {
      // 从数据源中删除边

    },

    //重新渲染图
    reGraphRender() {
      // 创建 G6 图实例
      const graph = new G6.Graph({
        container: 'mountNode', // 指定图画布的容器 id，与第 9 行的容器对应
        // 画布宽高
        width: 800,
        height: 500,
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
      });
      // 读取数据
      graph.data(this.data);
      // 渲染图
      graph.render();
    }

  },
  mounted() {
    // 创建 G6 图实例
    this.graph = new G6.Graph({
      container: 'mountNode', // 指定图画布的容器 id，与第 9 行的容器对应
      // 画布宽高
      width: 800,
      height: 500,
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
        rankdir: 'LR',
        tick: () => {
          graph.refreshPositions()
        }
      },
    });
    // 读取数据
    this.graph.data(this.data);
    // 渲染图
    this.graph.render();
  }
}
</script>