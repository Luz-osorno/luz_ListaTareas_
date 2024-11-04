const app1 = {
    data() {
        return {
            nuevaTarea: '',
            tareas: []
        };
    },
    computed: {
        porcentajeCompletado() {
            const totalTareas = this.tareas.length;
            let tareasRealizadas = 0;
            for (let i = 0; i < totalTareas; i++) {
                if (this.tareas[i].realizada) {
                    tareasRealizadas++;
                }
            }
            return totalTareas === 0 ? 0 : Math.round((tareasRealizadas / totalTareas) * 100);
        },
        barraEstilo() {
            const porcentaje = this.porcentajeCompletado;
            let color = 'gray';
            if (porcentaje >= 1 && porcentaje <= 40) {
                color = 'green';
            } else if (porcentaje >= 41 && porcentaje <= 70) {
                color = 'yellow';
            } else if (porcentaje >= 71 && porcentaje <= 100) {
                color = 'red';
            }
            return {
                width: '60%',
                background: `linear-gradient(to right, ${color} ${porcentaje}%, white ${porcentaje}%)`
            };
        },
        tareasCompletadas() {
            let completadas = 0;
            for (let i = 0; i < this.tareas.length; i++) {
                if (this.tareas[i].realizada) {
                    completadas++;
                }
            }
            return completadas;
        }
    },
    methods: {
        agregarTarea() {
            if (this.nuevaTarea !== '') {
                const tarea = { nombre: this.nuevaTarea, realizada: false };
                this.tareas[this.tareas.length] = tarea;
                this.nuevaTarea = '';
            }
        },
        eliminarTarea() {
            this.tareas.length = this.tareas.length - 1;
        }
    }
};

Vue.createApp(app1).mount('#seccion');