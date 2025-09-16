<template>
    <div class="space-y-6">
      <div v-for="item in contactInfo" :key="item.title" class="flex items-start gap-4">
        <div class="p-3 bg-blue-50 rounded-lg">
          <i :class="item.icon + ' text-xl text-blue-600'"></i>
        </div>
        <div>
          <h3 class="font-semibold text-lg mb-1">{{ item.title }}</h3>
          <p class="text-gray-600">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const contactInfo = [
    {
      icon: 'pi pi-map-marker',
      title: 'Unde Ne Găsești',
      content: 'Tudor Vladimirescu 69, Durlesti, Moldova'
    },
    {
      icon: 'pi pi-envelope',
      title: 'Email',
      content: 'office@artmaster.md'
    },
    {
      icon: 'pi pi-phone',
      title: 'Telefon',
      content: '0691 04 542'
    },
      
    {
      icon: 'pi pi-clock',
      title: 'Program de Lucru',
      content: 'Luni - Vineri: 9:00  - 18:00'
    }
  ];
  </script>