import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';
import { BigQuery } from '@google-cloud/bigquery';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  // 상품테이블을 구독할거야라는 뜻!
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return Product;
  }
  afterInsert(event: InsertEvent<Product>) {
    // 어떤 이벤트?? 프로덕트 이벤트에 insert할거야;
    console.log(event); // event. 하면 그 안에 있는 값을 불러올수 있다. event는 프로덕트.

    const bigQuery = new BigQuery({
      keyFilename: '제이슨명',
      projectId: '가져가봐 새끼야',
    });

    bigQuery
      .dataset('mybigquery02')
      .table('productlog')
      .insert([
        // 이 데이터베이스에 테이블이름 이거에 인서트 해줘!
        {
          id: event.entity.id,
          name: event.entity.name,
          decription: event.entity.description,
          price: event.entity.price,
          isSoldout: event.entity.isSoldout,
        },
      ]);
  }
}
