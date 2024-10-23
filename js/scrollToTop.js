const scrollToTop = () => {

    const topBtn = document.querySelector('#scrollToTopButton')

    topBtn.addEventListener('click', (e) => {

        e.preventDefault()

        window.scrollIntoView(document.querySelector(".header"), {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    })
}

scrollToTop()