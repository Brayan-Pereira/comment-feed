import { useState } from "react"


export default function App() {

  const [comments, setComments] = useState([])
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [data, setData] = useState("")


  const clickBtnSubmit = (ev) => {
    ev.preventDefault()

    email && mensagem != undefined ? addComment({ email, mensagem }) : alert('email ou mensagem não informados!')


    setEmail("")
    setMensagem("")

    console.log(comments)

  }



  const addComment = ({ email, mensagem }) => {
    const id = Math.floor(Math.random() * 1000000)
    const comentario = { id, email, mensagem, data }

    console.log(data)
    setComments(state => {
      const newState = [...state, comentario]
      return newState
    })

  }

  const addData = () => {
    const dt = new Date()
    let day = dt.getDate()
    let month = dt.getMonth()
    let year = dt.getFullYear()
    let hours = dt.getHours()
    let minutes = dt.getMinutes()
    let seconds = dt.getSeconds()

    return (`Em ${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`)
  }

  const remove = (id) => {
    console.log(`Remover o id: ${id}`)

    setComments((state) => {
      const newState = state.filter(comments => comments.id !== id)
      return newState
    })
  }

  return (
    <div id="app">
      <div className="card">
        <h2>Seção de Comentários</h2>
        <form className="form" onSubmit={clickBtnSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="comentario">Comentário</label>
          <textarea
            name="comentario"
            id="comentario"
            value={mensagem}

            onChange={(e) => setMensagem(e.target.value)}
          ></textarea>
          <button type="submit" onClick={() => setData(addData)}>Enviar comentário</button>
        </form>

        <div className="result">
          {comments.length === 0 ? <p>Seja o primeiro a comentar!</p> : comments.map((commet) => {

            return (
              <div key={commet.id} className="comentario">
                <div><h3>{commet.email}</h3>

                  <p>{commet.data}</p>
                  <p>{commet.mensagem}</p>
                </div>
                <button id="remove" onClick={() => remove(commet.id)}>X</button>
              </div>
            )
          })}

        </div>

      </div>
    </div>
  )
}