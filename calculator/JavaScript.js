let inputBox = document.getElementById('inputBox');
        let buttons = document.querySelectorAll('button');
        let string = '';

        buttons.forEach(element => {
            element.addEventListener('click', (b) => {
                if (b.target.innerText == '=') {
                    string = string == '' ? '0' : string;
                    try {
                        string = String(eval(string));
                        inputBox.value = string;
                    } catch (error) {
                        inputBox.value = "Error(Press AC)";
                    }
                } else if (b.target.innerText == 'AC') {
                    string = '';
                    inputBox.value = string;
                } else if (b.target.innerText == 'DEL') {
                    string = string.substring(0, string.length - 1);
                    inputBox.value = string;
                } else if (b.target.id == 'plusMinus') {
                    string = String(-eval(string));
                    inputBox.value = string;
                } else {
                    string += b.target.innerText;
                    inputBox.value = string;
                }
            });
        });

        document.getElementById('increaseSize').addEventListener('click', function() {
            document.querySelectorAll('button').forEach(button => {
                let currentSize = parseInt(window.getComputedStyle(button).fontSize);
                let newSize = currentSize + 2;
                if (newSize <= 26) {
                    button.style.fontSize = newSize + 'px';
                }
            });
        });

        document.getElementById('decreaseSize').addEventListener('click', function() {
            document.querySelectorAll('button').forEach(button => {
                let currentSize = parseInt(window.getComputedStyle(button).fontSize);
                let newSize = currentSize - 2;
                if (newSize >= 10) {
                    button.style.fontSize = newSize + 'px';
                }
            });
        });

        function activateDarkMode() {
            var element = document.body;
            element.classList.remove("light-mode");
            element.classList.add("dark-mode");
        }

        function activateLightMode() {
            var element = document.body;
            element.classList.remove("dark-mode");
            element.classList.add("light-mode");
        }
