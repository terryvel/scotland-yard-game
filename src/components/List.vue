<template>
    <v-card class="mx-auto">
      <v-list lines="auto">
        <v-list-item v-for="(item, index) in listItems" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <!-- <v-list-item-subtitle lines="5">{{ item.subtitle }}</v-list-item-subtitle> -->
          <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          <template v-slot:append>
            <v-btn icon="mdi-plus" variant="text" @click="openDialog(index)"></v-btn>
            <v-btn icon="mdi-close-circle" variant="text" @click="openClearDialog(index)"></v-btn>
          </template>
        </v-list-item>
      </v-list>
  
      <!-- Dialog para entrada do número -->
      <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <v-card-title>
            <span class="headline">Digite o número da pista</span>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="selectedNumber"
              label="Número"
              type="number"
              min="1"
              placeholder="Ex: 1"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDialog">Cancelar</v-btn>
            <v-btn color="blue darken-1" text @click="confirmNumber">Confirmar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  
      <!-- Dialog para confirmação de limpar o conteúdo -->
      <v-dialog v-model="clearDialog" max-width="400">
        <v-card>
          <v-card-title>
            <span class="headline">Confirmação</span>
          </v-card-title>
          <v-card-text>
            Tem certeza de que deseja limpar o conteúdo?
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="closeClearDialog">Cancelar</v-btn>
            <v-btn color="red darken-1" text @click="confirmClear">Sim, limpar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </template>
  
  <script>
  import pistasData from '@/assets/pistas.json'; // Caminho relativo ao arquivo JSON

  export default {
    data: () => ({
      dialog: false,
      clearDialog: false,
      selectedNumber: null,
      selectedItemIndex: null,
      pistas: pistasData, // JSON carregado diretamente
      listItems: [
        { title: 'AEROPORTO', subtitle: '...' },
        { title: 'BANCO', subtitle: '...' },
        { title: 'CEMITÉRIO', subtitle: '...' },
        { title: 'CINEMA', subtitle: '...' },
        { title: 'TRIBUNAL', subtitle: '...' },
        { title: 'SCOTLAND YARD', subtitle: '...' },
        { title: 'PORTO', subtitle: '...' },
        { title: 'HOSPITAL', subtitle: '...' },
        { title: 'HOTEL', subtitle: '...' },
        { title: 'BIBLIOTECA', subtitle: '...' },
        { title: 'CHAVEIRO', subtitle: '...' },
        { title: 'BANCA DE JORNAL', subtitle: '...' },
        { title: 'PARQUE', subtitle: '...' },
        { title: 'FARMÁCIA', subtitle: '...' },
        { title: 'CORREIOS', subtitle: '...' },
        { title: 'SUPERMERCADO', subtitle: '...' },
        { title: 'TAVERNA', subtitle: '...' },
        { title: 'ESTAÇÃO DE TREM', subtitle: '...' },
      ]
    }),
    methods: {
      openDialog(index) {
        this.selectedItemIndex = index;
        this.dialog = true;
      },
      closeDialog() {
        this.dialog = false;
        this.selectedNumber = null;
      },
      confirmNumber() {
        const number = this.selectedNumber; 
        const maxNumber = Object.keys(this.pistas).length; // Número máximo de chaves

        if (number >= 1 && number <= maxNumber) {
            this.listItems[this.selectedItemIndex].subtitle = this.pistas[number];
        } else {
            alert(`Número inválido! Escolha um número entre 1 e ${maxNumber}.`);
        }
        this.closeDialog();
      },
      openClearDialog(index) {
        this.selectedItemIndex = index;
        this.clearDialog = true;
      },
      closeClearDialog() {
        this.clearDialog = false;
      },
      confirmClear() {
        this.listItems[this.selectedItemIndex].subtitle = '...'; // Limpa o conteúdo do subtitle
        this.closeClearDialog();
      }
    }
  };
  </script>
  
  <style>
  /* Estilo adicional opcional */
  </style>
  