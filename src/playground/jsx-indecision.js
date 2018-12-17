console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (event) => {
    event.preventDefault(); // stop full page refresh
    const option = event.target.elements.option.value; // from input name
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = "";
        renderIndecisionApp();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderIndecisionApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

// create a render funciton that renders the new jsx
// call it right away
// then call it after options array is added-to

const renderIndecisionApp = () => {
    const template = (
        <div>
          <h1>{app.title}</h1>
          {app.subtitle && <p>{app.subtitle}</p>}
          <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
          <button disabled = {app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
          <button onClick={onRemoveAll}>clear options</button>
          <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
          </ol>
          <form onSubmit={onFormSubmit}>
              <input type="text" name="option"/>
              <button>add option</button>
          </form>
        </div>
      );

      ReactDOM.render(template, appRoot);
};

renderIndecisionApp();