const card = (data) => {
return `
        <section>
            <header>
                <h3>${data.name}</h3>
                <h4>${data.getRole()}</h4>
            </header>
            <ul>
                <li>ID: ${data.id}/li>
                <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li>${data.department ? data.department : data.github ? data.github : data.school}</li>
            </ul>
        </section>
`;
}

module.exports = card;
