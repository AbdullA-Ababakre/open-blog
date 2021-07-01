import QuoteList from '../components/quotes/QuoteList'

const DummyQuotes = [
    {id:'q1',author:'Abdulla',text:"learning react is fun"},
    {id:'q2',author:'AbdullaAbabakre',text:"learning react is Great"},
    {id:'q3',author:'AbdullaAbabakreAmat',text:"learning react is greater"},
]

const AllQuotes = ()=>{
  return <QuoteList quotes={DummyQuotes} />
}

export default AllQuotes;