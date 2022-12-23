import { useEffect, useState } from 'react';
import CardsList from '../slideCardsLists/CardsList';

// TODO: Show selected page, and next and prv whren pagination, link kad se pusti da otvori link
function Pagination(props) {
  const [dataList, setDataList] = useState(props.dataList);
  const [type, setType] = useState(props.type)
  const users = props.users;
  const clients = props.clients;
  const cardPerPage = props.cardPerPage

  const [pages, setPages] = useState(props.pages || 1);

  useEffect(() => {
    setDataList(props.dataList);
    setPages(props.pages)
  }, [props.pages,props.dataList])

  const dataInFormSend = (e) => {
		props.dataInFormSend(e)
	}

	const dataInFormDelete = (e) => {
		props.dataInFormDelete(e)
	}

  const resetPassword = (e) => {
		props.resetPassword(e)
	}

  return (
    <>
      <div class="accordion-wrap">
        <CardsList resetPassword={resetPassword} dataInFormDelete={dataInFormDelete}  dataInFormSend={dataInFormSend} cardPerPage={cardPerPage} type={type} users={users} clients={clients} dataList={dataList} />
      </div>
      <div class="pagination">
        <ul>
          {Array(pages == 0 ? 1 : pages).fill(0).map((page, index) => {
            return <li><a onClick={() => props.pageToParent(index + 1)}>{index + 1}</a></li>
          })}
          <li class="last">
            <a onClick={() => props.pageToParent(0)}>Next</a>
          </li>
        </ul>
      </div>
    </>
  )
};

export default Pagination;