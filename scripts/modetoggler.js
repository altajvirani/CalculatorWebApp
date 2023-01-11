const root = document.querySelector(':root');
const body = document.querySelector('body')
const toggle = document.getElementById('toggle')
const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));
toggle.onclick = function () {
    toggle.classList.toggle('dark')
    body.classList.toggle('dark')
    if (!toggle.className.includes("dark")) {
        const myVariables = {
            '--btnmg': '0.3rem',
            '--btnwidhgt': '3.6rem',
            '--bodytopleft': '#F7F8FC',
            '--bodybottomright': '#F7F8FC',
            '--calcibodytopleft': '#ECF0F9',
            '--calcibodybottomright': '#FFFFFF',
            '--calcibodytopleftshadow': '#ffffff',
            '--calcibodybottomrightshadow': '#E1E6F3',
            '--screentextcol': '#736B95',
            '--screentopleftshadow': '#d9dfef',
            '--screenbottomrightshadow': '#FFFFFF',
            '--opstextcol': '#F3F6FC',
            '--opsbtntopleft': '#9189B6',
            '--opsbtnbottomright': '#4F486D',
            '--btntopleftshadow': '#ffffff',
            '--btnbottomrightshadow': '#e4e8f3',
            '--numstextcol': '#736B95',
            '--numsbtntopleft': '#E5EBF7',
            '--numsbtnbottomright': '#FFFFFF'
        };
        setVariables(myVariables);
        document.getElementById("bsicon").src = "../assets/backspace-light.svg";
    } else {
        const myVariables = {
            '--btnmg': '0.3rem',
            '--btnwidhgt': '3.6rem',
            '--bodytopleft': '#4E6573',
            '--bodybottomright': '#38465F',
            '--calcibodytopleft': '#42536F',
            '--calcibodybottomright': '#476A82',
            '--calcibodytopleftshadow': '#4e6676',
            '--calcibodybottomrightshadow': '#344359',
            '--screentextcol': '#C1D9E9',
            '--screentopleftshadow': '#3A4B64',
            '--screenbottomrightshadow': '#51677f',
            '--opstextcol': '#435772',
            '--opsbtntopleft': '#9ccae9',
            '--opsbtnbottomright': '#467993',
            '--btntopleftshadow': '#576b82',
            '--btnbottomrightshadow': 'rgb(72, 90, 114)',
            '--numstextcol': '#C1D9E9',
            '--numsbtntopleft': '#41566e',
            '--numsbtnbottomright': '#546e8a'
        };
        setVariables(myVariables);
        document.getElementById("bsicon").src = "../assets/backspace-dark.svg";
    }
}
