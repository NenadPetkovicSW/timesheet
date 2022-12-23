import { useEffect, useState } from 'react';
import Card from '../../molecules/slideCards/Card';
import * as mock from '../../../mock/mock'
function CardsList(props) {
  const [dataList, setDataList] = useState(props.dataList);
  const [type, setType] = useState(props.type);
  const users = props.users;
  const clients = props.clients;
  const cardPerPage= props.cardPerPage || mock.CARDS_PER_PAGE;

  const dataInFormSend = (e) => {
		props.dataInFormSend(e)
	}

	const dataInFormDelete = (e) => {
		props.dataInFormDelete(e)
	}

  const resetPassword = (e) => {
		props.resetPassword(e)
	}

  useEffect(() => {
    setDataList(props.dataList);
  }, [props])
  return (
    <>
      {dataList.map((data, index) => {
        if (index < cardPerPage)
          return <Card resetPassword={resetPassword} dataInFormSend={dataInFormSend} dataInFormDelete={dataInFormDelete} type={type} position={data.id} data={data} users={users} clients={clients}></ Card>
      })}
    </>
  )
};

export default CardsList;