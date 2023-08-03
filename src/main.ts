import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

async function loadUsers(){
  const response = await fetch(import.meta.env.VITE_APP_API);
  console.log(import.meta.env.VITE_APP_API)
  const data = await response.json();

  const userList = document.createElement('div')
  data.forEach((element: any) => {
    userList.innerHTML += `
    <div>
      <h2>${element.name}</h2>
      </div>
    `
  });
  const users = document.querySelector<HTMLDivElement>('#users');
  if (users){
  users.appendChild(userList);
  }
}

loadUsers()


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Hello everyone!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <div id="users"></div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
