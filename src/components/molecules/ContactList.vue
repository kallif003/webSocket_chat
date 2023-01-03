<template>
  <ContactContainer>
    <h2>Seus Contatos</h2>
    <div class="scroll">
      <ContactButton
        v-for="contact in contacts"
        :key="contact.id"
        @click="trocarNome(contact.name)"
        >{{ contact.name }}</ContactButton
      >
    </div>
  </ContactContainer>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { ContactContainer, ContactButton } from "../atoms";

defineProps({
  contacts: { type: Object },
});

const emit = defineEmits(["getName"]);

const trocarNome = (name: string) => {
  emit("getName", name);
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
  text-align: left;
  color: #ddd;
  margin: -0.4rem 0 -1.5rem 0;
}
.scroll {
  overflow: hidden;
  overflow-y: scroll;
  width: 20rem;
  height: 30rem;
  margin-top: -1rem;
  
}
</style>
