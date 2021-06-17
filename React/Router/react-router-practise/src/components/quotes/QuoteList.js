import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {

  const history = useHistory();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const isAsc = query.get('sort') === 'asc';

  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };

  const changeSortingHandler = () => {
    history.push('/quotes?sort=' + (isAsc ? 'desc' : 'asc'));
  }


  const sortedQuotes = sortQuotes(props.quotes,isAsc);


  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isAsc ? 'desc' : 'asc'}</button>
      </div>
      <ul className={classes.list} className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
