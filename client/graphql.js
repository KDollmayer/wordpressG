fetch(`http://localhost:8888/graphql`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
        {
            pages {
                nodes {
                    id
                    title
                }
            }
        }
    `,
  }),
  })
    .then(res => res.json())
    .then(res => console.log(res.data));

    