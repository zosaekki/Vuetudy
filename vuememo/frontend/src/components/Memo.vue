<template>
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">+ 추가</button>
    </div>
    <ul>
      <li v-for="list in state.data" :key="list.id" >
        {{ list.content }}
        <button class="btn btn-success" @click="edit(list.id)">수정</button>
        <button class="btn btn-danger" @click="del(list.id)">삭제</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      data: []
    });

    const add = () => {
      const content = prompt("내용을 입력해주세요.");
      console.log(content);

      if(content === '' || content === null) {
        alert('내용을 입력해주세요.');
      } else {
        axios.post("/api/memos", { content })
        .then((res) => {
          state.data = res.data;
        })
      }
    };

    const edit = (id) => {
      const content = prompt("내용을 입력해주세요", state.data.find(list => list.id === id).content);
      console.log(content);
      axios.put("/api/memos/" + id, { content })
      .then((res) => {
        state.data = res.data;
      })
    };

    const del = (id) => {
      const content = confirm("삭제하시겠습니까?", state.data.find(list => list.id === id).content);
      console.log(content);
      if(content === true) {
        axios.delete("/api/memos/" + id, { content })
        .then((res) => {
          state.data = res.data;
        })
      }
    }

    axios.get("/api/memos")
    .then((res) => {
      state.data = res.data
    });

    return { state, add, edit, del };
  },
}
</script>

<style lang="scss" scoped>
.memo {
  .act {
    padding: 10px 5px 5px 5px;
    text-align: right;
  }

  ul {
    list-style: none;
    padding: 15px;
    margin: 0;

    li {
      padding: 15px;
      margin: 10px 0;
      border: 1px solid #ccc;
    }
  }
}
</style>