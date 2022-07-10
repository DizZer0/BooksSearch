class Api {
  constructor() {
    this._apiKey = 'AIzaSyD2cje6Oai7JQCLm1e7Gs083BTlCzlp3Uo'
  }
  _parseResponse(res) {
    if(res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }
  getBooks(data) {
    console.log(data)
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${data.valueSearch}&${data.valueCategorie === 'all' ? `subject:all` : `subject:${data.valueCategorie}`}&startIndex=${data.valueIndex}&printType=books&maxResults=30&orderBy=${data.valueSorting}&${this._apiKey}=yourAPIKey`)
      .then(res => this._parseResponse(res))
  }
  //orderBy=newest/relevance новые или релевантные книги
  //subject:history категория книги, в этом примере это история
  // q=world сам запрос, в данном случае "мир"
  // startIndex=0  устанавливает начальный индекс книги. при нажатии на кнопку "load more" отправляется новый запрос на сервер, при этом добавив к этому значению +30
  // в getBooks можно создать переменную, которая будет отвечать за значение startIndex при каждом новом поиске она будет устанавливаться на 0, а при нажатии на кнопку
  // load more к ней будет добавляться +30
}

const api = new Api()
export default api