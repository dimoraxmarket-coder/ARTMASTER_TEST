<template>
  <main>
    <PageHeader
      title="Despre Noi"
      description="Suntem o echipă de creatori pasionați și inovatori."
    />
    
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Despre Noi</h2>
            <p class="text-gray-600 mb-4">
             Compania o fost   Fondată în 2007, ArtMaster a fost mereu în fruntea inovației vizuale, ajutând afacerile să-și transforme brandul prin tipografie, tăiere laser, montaj litere volum și branding auto, obținând rezultate remarcabile.
            </p>
            <p class="text-gray-600 mb-6">
             Echipa noastră combină creativitatea cu expertiza tehnică pentru a livra soluții vizuale care nu doar arată impecabil, ci și generează rezultate reale pentru afacerea ta.
            </p>
            <div class="grid grid-cols-2 gap-8">
              <div v-for="stat in stats" :key="stat.label" class="text-center">
                <div class="text-4xl font-bold text-blue-600 mb-2">{{ stat.value }}</div>
                <div class="text-gray-600">{{ stat.label }}</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <img
              src="https://scontent.fkiv1-1.fna.fbcdn.net/v/t39.30808-6/487738381_1084952316985032_6768306674576781231_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=udBxkDUaeZkQ7kNvwEc1KmE&_nc_oc=AdkVP7IC-f73tOtALk7eMuWYMs4E4ovKPVqjsXgzPS3Gmvg0lXIcq87S7G6m1g2ajbw&_nc_zt=23&_nc_ht=scontent.fkiv1-1.fna&_nc_gid=gfO0eV_gvIkFi1CcFtAnWQ&oh=00_AfaCqM5wOGpHX3gMHpLSwL1RbbRhXGfwuSSYUKbx8EvR7w&oe=68C6F54F"
              alt="Team meeting"
              class="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import PageHeader from '@/components/shared/PageHeader.vue';

const stats = [
  { value: '500+', label: 'Proiecte Finalizate' },
  { value: '800+', label: 'Clienți Mulțumiți' },
  { value: '15+', label: 'Echipa Noastră' },
  { value: '18+', label: 'Experiență Profesională' }
];
</script>