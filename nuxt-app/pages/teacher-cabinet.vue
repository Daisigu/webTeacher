<template>
  <section>
    <div class="container">
      <h1 class="page-title">Кабинет учителя</h1>
      <div class="cards">
        <div class="card-item col-3" :key="item.id" v-for="item in courses">
          {{ item.label }}
        </div>
      </div>
      <h1 class="students-title">Ученики</h1>
      <div class="students-list">
        <div
          :class="{ active: student.id == pickedStudent.id }"
          class="students-item"
          :key="student.id"
          v-for="student in students"
          @click="pickStudent(student)"
        >
          <span class="student-fio">{{ student.fio }}</span>
          <div class="student-accordion">
            <p>Возраст: {{ student.year }}</p>
            <p>Телефон: {{ student.phone }}</p>
            <p>Почта: {{ student.mail }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLoginStore } from "~~/store/login";

const courses = [
  {
    label: "Курс 1",
    id: "1",
  },
  {
    label: "Курс 2",
    id: "2",
  },
  {
    label: "Курс 3",
    id: "3",
  },
  {
    label: "Курс 4",
    id: "4",
  },
  {
    label: "Курс 5",
    id: "5",
  },
  {
    label: "Курс 6",
    id: "6",
  },
];
const students = ref([
  {
    fio: "Иван Васильевич Федоров",
    id: "1",
    year: 16,
    phone: "+79130366559",
    mail: "test@mail.ru",
  },
  {
    fio: "Иван Васильевич Федоров",
    id: "2",
    year: 16,
    phone: "+79130366559",
    mail: "test@mail.ru",
  },
  {
    fio: "Иван Васильевич Федоров",
    id: "3",
    year: 16,
    phone: "+79130366559",
    mail: "test@mail.ru",
  },
  {
    fio: "Иван Васильевич Федоров",
    id: "4",
    year: 16,
    phone: "+79130366559",
    mail: "test@mail.ru",
  },
]);
const pickedStudent = ref({});
const router = useRouter();
const authStore = useLoginStore();
const pickStudent = (student) => {
  if (student.id == pickedStudent.value.id) {
    pickedStudent.value = "";
  } else {
    pickedStudent.value = student;
  }
};
onMounted(() => {
  nextTick(() => {
    authStore.role == "student" ? router.push("/student-profile") : 0;
  });
});
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  margin-bottom: 2rem;
}
.card-item {
  border: 1px solid black;
  text-align: center;
  padding: 4rem 3rem;
  transition: all 0.2s ease;
}
.card-item:hover {
  transform: scale3d(1.1, 1.1, 1.1);
  background-color: rgb(241, 241, 241);

  cursor: pointer;
}
.students-title {
  font-size: 25px;
}
.students-item {
  padding: 0.5rem 1rem;
  border: 1px solid lightgray;
  transition: all 0.2s ease;
}
.students-item:hover {
  cursor: pointer;
  background-color: rgb(241, 241, 241);

  transform: translateX(30px);
}
.students-item.active {
  background-color: rgb(241, 241, 241);

  transform: translateX(30px);
}
.student-accordion {
  display: none;
}
.student-accordion > p {
  margin-bottom: 0.2rem;
}
.active > .student-accordion {
  display: block;
}
.student-fio {
  font-size: 18px;
  font-weight: 400;
}
</style>
