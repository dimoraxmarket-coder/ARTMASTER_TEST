<template>
    <main>
      <PageHeader
        title="Contactează-ne"
        description="Contactează echipa noastră. Abia așteptăm să primim mesajul tău!"
      />
      
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <!-- Contact Form -->
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <h2 class="text-2xl font-bold mb-6">Trimite-ne un mesaj</h2>
              <ContactForm />
            </div>
            
            <!-- Contact Information -->
            <div class="lg:pl-8">
              <h2 class="text-2xl font-bold mb-6">Ia legătura cu noi</h2>
              <ContactInfo />
              
              <!-- Social Media Links -->
              <div class="mt-12">
                <h3 class="font-semibold text-lg mb-4">Social Media</h3>
                <div class="flex gap-4">
                  <a v-for="social in socialLinks" 
                     :key="social.icon"
                     href="#"
                     class="p-3 bg-gray-50 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <i :class="social.icon + ' text-xl'"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  import PageHeader from '@/components/shared/PageHeader.vue';
  import ContactForm from '@/components/contact/ContactForm.vue';
  import ContactInfo from '@/components/contact/ContactInfo.vue';
  
  const socialLinks = [
  { icon: 'pi pi-facebook', url: 'https://facebook.com' },
  { icon: 'pi pi-twitter', url: 'https://twitter.com/profilul-tau' },
  { icon: 'pi pi-instagram', url: 'https://instagram.com/profilul-tau' },
  { icon: 'pi pi-linkedin', url: 'https://linkedin.com/in/profilul-tau' }
];

  </script>