export const About = () => {
  function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ]
  }

  const days = Math.floor((new Date('06.02.2021').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Реакт приложение для заметок 🤭</h1>
        <p className="lead">
          Тестовая база данных перестанет работать через {days} {declOfNum(days, ['день', 'дня', 'дней'])}
        </p>
      </div>
    </div>
  )
}