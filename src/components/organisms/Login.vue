<template>
  <LoginContainer>
    <H1>WEBSOCKET CHAT</H1>
    <H2>Acesse e conecte-se</H2>
    <InputContainer>
      <IconContainer>
        <i class="far fa-envelope"></i>
      </IconContainer>
      <Input typeof="email" placeholder="Email" />
      <IconContainer>
        <i class="fas fa-unlock-alt"></i>
      </IconContainer>
      <Input typeof="Password" placeholder="Password" />
    </InputContainer>
    <AcessButton>Acessar</AcessButton>
  </LoginContainer>
</template>

<script setup lang="ts">
import {
  LoginContainer,
  H1,
  H2,
  Input,
  InputContainer,
  AcessButton,
  IconContainer,
} from "../atoms";
</script>
