import { useParams, Route, Link } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DummyQuotes = [
    { id: 'q1', author: 'Abdulla', text: "learning react is fun" },
    { id: 'q2', author: 'AbdullaAbabakre', text: "learning react is Great" },
    { id: 'q3', author: 'AbdullaAbabakreAmat', text: "learning react is greater" },
]

const QuoteDetail = () => {
    const params = useParams();

    const quote = DummyQuotes.find((item) => item.id === params.quoteId)

    if (!quote) {
        return <p>No Quote Found</p>
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />

            <Route path={`/quotes/${params.quoteId}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>

            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </>
    )
}
export default QuoteDetail;