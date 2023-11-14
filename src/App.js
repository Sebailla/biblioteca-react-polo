/* sirven para importar (archivos,dependencias, estilos,etc)*/

import { React } from 'react';
import './App.css';
import { fetchBookData } from './api';

/* se crea la funcion app*/

const resource = fetchBookData()
class App extends React.Component {
  constructor(props) {
    super(props);
    /* crea un arreglo de los libros que agregamos */
    this.state = {
      books: [
        { id: 0, rating: 3, title: 'Red Queen', image: 'libro1.jpg' },
        { id: 1, rating: 5, title: 'El maravilloso mago de oz', image: 'libro2.jpg' },
        { id: 2, rating: 1, title: 'Peter pan ', image: 'libro3.png' },
        { id: 3, rating: 4, title: 'Histoires', image: 'libro4.webp' },
        { id: 4, rating: 4, title: 'Story books', image: 'libro5.webp' },
        { id: 5, rating: 4, title: 'El libro de la selva', image: 'libro6.webp' },
        { id: 6, rating: 4, title: ' Harry potter', image: 'libro7.jpg' },
        { id: 7, rating: 4, title: 'L"ordine', image: 'libro8.jpg' },
        { id: 9, rating: 4, title: 'Los minios', image: 'libro10.jpg' },
        { id: 10, rating: 4, title: 'El regreso a casa', image: 'libro11.jpg' },
        { id: 11, rating: 5, title: 'Un nuevo viaje', image: 'libro12.jpg' },
      ],
      copyBooks: []
    };
  }
  bookDetails = () => {
    const book = resource.book.read();
    console.log(book)
    return (
      <h1>book:{book.titulo}</h1>
    );
  }

  componentDidMount() {
    this.initBooks(fetchBookData);
  }
  /* inicializar i
  initBooks=()=>{
    this.setState((state,props)=>({
      copyBooks:[...state.books]
    }));
  }
  /* agregar*/
  onAdd = (Item) => {
    let temp = [...this.state.books];
    const id = temp[temp.length - 1].id + 1;
    Item['id'] = id;
    temp.push(Item);

    this.setState({ books: [...temp] });
    this.initBooks();
  }
  /* buscar*/
  onSearch = (query) => {
    if (query === '') {
      this.initBooks();
    } else {
      const temp = [...this.state.books];
      let res = [];
      temp.forEach(Item => {
        if (Item.title.toLowerCase().indexOf(query) > -1) {
          res.push(Item);
        }
      });
      this.setState({ copyBooks: [...res] });
    }
  }
  /* actualiza el rating (estrellitas)*/
  onUpdateRating = (Item) => {
    var temp = [...this.state.books];
    const index = temp.findIndex(x => x.id === Item.id);
    temp[index].title = Item.title;
    temp[index].image = Item.image;
    temp[index].rating = Item.rating;

    this.setState({ books: [...temp] });
    this.initBooks();
  }
  /* este codigo esta eliminar*/
  onRemove = (id) => {
    var temp = [...this.state.books];
    const res = temp.filter(Item => Item.id !== id);

    this.setState({ books: [...res] });
    this.initBooks();
  }
  /* devuelve el titulo de los libros */
  render() {
    return (
      <div>
        {
          this.state.post.title && (
            <div dangerouslySetInnerHTML={{ __html: this.state.post.title.rendered }} />)
        }
      </div>

    );
  }
}
export default App;