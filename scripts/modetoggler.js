const root = document.querySelector(':root');
const toggle = document.getElementById('toggle');
const theme = {
    light: {
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
        '--numsbtnbottomright': '#FFFFFF',
        '--credits': '#BCC0CF',
        '--myName': '#8A859C'
    }, dark: {
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
        '--numsbtnbottomright': '#546e8a',
        '--credits': '#91A2B0',
        '--myName': '#B1CDE0'
    }
};

const toggleTheme = () => {
    toggle.classList.toggle('dark')
    if (root.classList.contains('light')) {
        root.classList.remove('light');
        root.classList.add('dark');
        setThemeVariables(theme.dark);
        document.getElementById("bsicon").src = "../assets/backspace-dark.svg";
    } else {
        root.classList.remove('dark');
        root.classList.add('light');
        setThemeVariables(theme.light);
        document.getElementById("bsicon").src = "../assets/backspace-light.svg";
    }
};

const setThemeVariables = (variables) => {
    Object.entries(variables).forEach(([key, value]) => {
        root.style.setProperty(key, value);
    });
}
root.classList.add("light");
toggle.onclick = toggleTheme;