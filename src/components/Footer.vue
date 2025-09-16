<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <h3 class="font-bold text-xl" style="color: #EBED9E;">Artmaster</h3>
          </div>
          <p class="text-gray-400">
           Creăm experiențe digitale care inspiră și inovează.
          </p>
        </div>
        <div>
          <h3 class="font-bold mb-4"  style="color: #EBED9E;">Serviciile Noastre</h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <router-link to="/services" class="hover:text-blue-400 transition-colors">Tipografie & Print</router-link>
            </li>
            <li>
              <router-link to="/services" class="hover:text-blue-400 transition-colors">Tăiere Laser & Frezare</router-link>
            </li>
            <li>
              <router-link to="/services" class="hover:text-blue-400 transition-colors">Montaj Litere & Elemente 3D</router-link>
            </li>
            <li>
              <router-link to="/services" class="hover:text-blue-400 transition-colors">Digital Marketing</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-4"  style="color: #EBED9E;">Companie</h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <router-link to="/about" class="hover:text-blue-400 transition-colors">Despre Noi</router-link>
            </li>
            <li>
              <router-link to="/portfolio" class="hover:text-blue-400 transition-colors">Portofoliu</router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:text-blue-400 transition-colors">Contact</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-4"  style="color: #EBED9E;">Social Media</h3>
          <div class="flex gap-4">
            <i class="pi pi-facebook text-xl cursor-pointer hover:text-blue-400"></i>
            <i class="pi pi-twitter text-xl cursor-pointer hover:text-blue-400"></i>
            <i class="pi pi-instagram text-xl cursor-pointer hover:text-blue-400"></i>
            <i class="pi pi-linkedin text-xl cursor-pointer hover:text-blue-400"></i>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} [Artmaster] © Toate drepturile rezervate.</p>
      </div>
    </div>
  </footer>
</template>
