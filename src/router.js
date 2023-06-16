import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue';
import Cursos from './components/Cursos.vue';
import Inicio from './components/Inicio.vue';
import Matriculas from './components/Matriculas.vue';
import Alunos from './components/Alunos.vue';
import AlunosAdd from './components/AlunosAdd.vue';
import CursosAdd from './components/CursosAdd.vue';
import AlunosVisualizar from './components/AlunosVisualizar.vue';
import CursosVisualizar from './components/CursosVisualizar.vue';
import CursosEditar from './components/CursosEditar.vue';
import AlunosEditar from './components/AlunosEditar.vue';

const routes = [
  { path: '/', name: 'inicio', component: Inicio },
  { path: '/login', name: 'login', component: Login },
  { path: '/cursos', name: 'cursos', component: Cursos, meta: { requiresAuth: true } },
  { path: '/alunos', name: 'alunos', component: Alunos, meta: { requiresAuth: true } },
  { path: '/matriculas', name: 'matriculas', component: Matriculas, meta: { requiresAuth: true } },  
  { path: '/alunos/add', name: 'alunosadd', component: AlunosAdd, meta: { requiresAuth: true } },  
  { path: '/cursos/add', name: 'cursosadd', component: CursosAdd, meta: { requiresAuth: true } },  
  { path: '/alunosvisualizar/:codigoaluno', name: 'alunosvisualizar', component: AlunosVisualizar, meta: { requiresAuth: true } },  
  { path: '/cursosvisualizar/:codigocurso', name: 'cursosvisualizar', component: CursosVisualizar, meta: { requiresAuth: true } },  
  { path: '/cursoseditar/:codigocurso', name: 'cursoseditar', component: CursosEditar, meta: { requiresAuth: true } },  
  { path: '/alunoseditar/:codigoaluno', name: 'alunoseditar', component: AlunosEditar, meta: { requiresAuth: true } },  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  const isLoginPage = to.name === 'login';

  if (!isAuthenticated && !isLoginPage) {
    router.push({ name: 'login' });
  } else {
    next();
  }
});

export default router
