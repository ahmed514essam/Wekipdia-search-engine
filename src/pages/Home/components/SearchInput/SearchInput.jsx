import './SearchInput..css'
export default function SearchInput({ searchQuery, setSearchQuery }) {
    return (
        <div >


<div className="ert input-group mb-10">
 
  <input type="text" className="asd  form-control fs-2 border border border-dark-subtle  " value={searchQuery}    onChange={(e) => setSearchQuery(e.target.value)} placeholder="Type anything to search" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

        </div>
      
    )
}
