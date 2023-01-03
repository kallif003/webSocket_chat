<template>
  <Container>
    <div class="chat-div">
      <ContactListVue :contacts="contacts" @getName="contactName" />
      <ChatVue :name="contact" />
    </div>
  </Container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ChatVue from "@/components/organisms/Chat.vue";
import ContactListVue from "@/components/molecules/ContactList.vue";
import { Container } from "@/components/atoms";

const contacts = ref([
  { id: 1, name: "Talita" },
  { id: 2, name: "Eloise" },
  { id: 3, name: "Pai" },
  { id: 4, name: "Mãe" },
  { id: 3, name: "Pai" },
  { id: 4, name: "Mãe" },
  { id: 3, name: "Pai" },
  { id: 4, name: "Mãe" },
  { id: 3, name: "Pai" },
  { id: 4, name: "Mãe" },
  { id: 3, name: "Pai" },
  { id: 4, name: "Mãe" },
]);

const contact = ref("");

const contactName = (name: string) => {
  contact.value = name;
};
</script>

<style scoped>
.chat-div {
  display: flex;
  justify-content: space-between;
}
</style>
