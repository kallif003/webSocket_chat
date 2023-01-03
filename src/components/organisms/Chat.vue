<template>
  <ChatContainer>
    <h2>Você está conversando com: {{ name }}</h2>

    <TextContainer>
      <MsgContainer
        v-for="msg in msgs"
        :key="msg.id"
        :class="name ? 'block' : 'hidden'"
      >
        <div v-if="msg.name === name" class="flex flex-row items-center">
          <h1 class="text-[#ddd]">{{ name }}:</h1>
          <p>
            {{ msg.msg }}
          </p>
        </div>
      </MsgContainer>

      <MyMsgContainer v-for="msg in msgs" :key="msg.id">

      </MyMsgContainer>
    </TextContainer>

    <div class="chat-div">
      <InputChat type="text" placeholder="Sua mensangem" v-model="myMessages" />
      <SendButton @click="sendMyMsg">
        <H2>Enviar</H2>
      </SendButton>
    </div>
  </ChatContainer>
</template>

<script setup lang="ts">
import { defineProps, ref, reactive } from "vue";
import {
  ChatContainer,
  InputChat,
  TextContainer,
  SendButton,
  H2,
  MsgContainer,
  MyMsgContainer,
} from "../atoms";

interface MyMsg {
  id: string;
  msg: string;
  destination: string | undefined;
}
const msgs = ref([
  { id: 1, msg: "ola", name: "Talita" },
  { id: 2, msg: "Oi pai", name: "Eloise" },
]);

const myMessages = ref("");
const myMsg = reactive<MyMsg[]>([{ id: "0", msg: "", destination: "" }]);

const props = defineProps({ name: { type: String } });

const sendMyMsg = () => {
  myMsg.push({
    id: new Date().toISOString(),
    msg: myMessages.value,
    destination: props?.name,
  });
  myMessages.value = "";
};

console.log(myMsg);
</script>

<style scoped>
.chat-div {
  display: flex;
  justify-content: space-between;
}

h2 {
  font-size: 2rem;
  text-align: left;
  color: #ddd;
  margin: -0.4rem 0 -1.5rem 0;
}
p {
  font-size: 1.2rem;
  padding-left: 0.5rem;
}
</style>
