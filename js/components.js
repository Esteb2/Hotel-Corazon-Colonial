// Data for rooms
const habitaciones = [
    {
        nombre: "Suite Colonial",
        precio: "$300.000",
        tamaño: "53m²",
        comodidades: ["Bañera de mármol", "WiFi premium", "Vista al jardín", "Minibar", "Smart TV 55\""]
    },
    {
        nombre: "Junior Suite",
        precio: "$250.000",
        tamaño: "42m²",
        comodidades: ["Ducha lluvia", "WiFi premium", "Balcón privado", "Smart TV 50\""]
    },
    {
        nombre: "Habitación Estándar",
        precio: "$180.000",
        tamaño: "35m²",
        comodidades: ["Ducha moderna", "WiFi", "Smart TV 43\"", "Escritorio de trabajo"]
    }
];

// Data for services
const servicios = [
    {
        nombre: "Spa Colonial",
        icono: "spa",
        descripcion: "Tratamientos tradicionales y modernos para su bienestar"
    },
    {
        nombre: "Tours Guiados",
        icono: "map-marked-alt",
        descripcion: "Explore la rica historia de Monguí con nuestros guías expertos"
    },
    {
        nombre: "Estacionamiento",
        icono: "car",
        descripcion: "Estacionamiento privado y seguro para huéspedes"
    },
    {
        nombre: "Restaurante",
        icono: "utensils",
        descripcion: "Gastronomía local e internacional con ingredientes frescos"
    }
];

// Dynamic content loader
class ComponentLoader {
    static async loadComponent(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.text();
        } catch (error) {
            console.error('Error loading component:', error);
            return null;
        }
    }

    static renderRoomCards() {
        const container = document.querySelector('.rooms-grid');
        if (!container) return;

        habitaciones.forEach(room => {
            const card = document.createElement('div');
            card.className = 'room-card';
            card.innerHTML = `
                <div class="room-card-header">
                    <svg class="room-card-peak" viewBox="0 0 400 60" preserveAspectRatio="none"><polygon points="0,0 400,0 200,60"/></svg>
                    <span class="room-card-title">${room.nombre}</span>
                </div>
                <div class="room-image">
                    <img src="assets/rooms/${room.nombre.toLowerCase().replace(/\s+/g, '-')}.jpg" 
                         alt="${room.nombre}" 
                         onerror="this.src='https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'">
                    <div class="room-tag">${room.tamaño}</div>
                </div>
                <div class="room-info">
                    <div class="price-tag">
                        <span class="price-amount">${room.precio}</span>
                        <span class="price-period">por noche</span>
                    </div>
                    <ul class="room-amenities">
                        ${room.comodidades.map(amenity => `
                            <li>
                                <span class="amenity-icon">✦</span>
                                <span class="amenity-text">${amenity}</span>
                            </li>
                        `).join('')}
                    </ul>
                    <div class="room-info-footer">
    <a href="contacto.html" class="btn-reserve">Reservar Ahora</a>
</div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    static renderServiceCards() {
        const container = document.querySelector('.services-grid');
        if (!container) return;

        servicios.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.innerHTML = `
                <i class="fas fa-${service.icono}"></i>
                <h3>${service.nombre}</h3>
                <p>${service.descripcion}</p>
            `;
            container.appendChild(card);
        });
    }
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Render room cards if on rooms page
    ComponentLoader.renderRoomCards();
    
    // Render service cards if on services page
    ComponentLoader.renderServiceCards();
});
