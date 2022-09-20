import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';


export const options = {
  vus: 30,
  duration: '30s',
}

export default function() {
  http.get('http://localhost:8080/reviews/66642');
  sleep(1)
}