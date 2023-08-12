<script>
import moment from "moment";

export default {
  data() {
    return {
      today: moment().format("YYYY年M月DD日")      
    };
  },
  computed: {
    daysSincePastDate() {
      const today = moment();
      const pastDate = moment("2009-09-06");
      return today.diff(pastDate, 'days');
    }
  }
};
</script>

<template>
  <div class="datecontainer">
    <div class="date">
      <div class="date_text">
        今天是<span class="date_day">{{ today }}</span>
      </div>
      <div class="date_text">
        从事MBA教育工作<span class="date_day">{{ daysSincePastDate }}</span>天
      </div>
    </div>
  </div>
</template>

<style>
.datecontainer {
  margin: 0 auto;
}
.date {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 1.5rem auto;
  padding: 1rem 1rem;
  color: var(--color-text);
  text-align: center;
  font-size: 1rem;
}
.date_text {
  display: flex;
  align-items: center;
}
.date_day {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0.5rem;
}
</style>
