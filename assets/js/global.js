fetch('components/header-section.html')
            .then((res) => res.text())
            .then((htmlData) => {
                document.getElementById('header-section').innerHTML = htmlData;
            })