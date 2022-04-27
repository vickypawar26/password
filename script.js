var pass = document.getElementById("password");

        function genPassword() {
            var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var passLength = 12;
            var pass = "";
            for (var i = 0; i <= passLength; i++) {
                var randomNumber = Math.floor(Math.random() * chars.length);
                pass += chars.substring(randomNumber, randomNumber + 1);
            }
            document.getElementById("password").value = pass;
        }