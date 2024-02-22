import { type Database } from 'arangojs';
import { type NetworkMap } from '..';
export interface TransactionDB {
    _transaction: Database;
    /**
     * @param collection: Collection name against which this query will be run
     * @param filter: A String that will put next to the FILTER keyword to run against Arango
     *
     * ```
     * const query = aql`
     * FOR doc IN ${collection}
     * FILTER ${filter}
     * RETURN doc`;
     * ```
     *
     * Note, use "doc." in your query string, as we make use of "doc" as the query and return name.
     * @memberof TransactionHistoryDB
     */
    queryTransactionDB: (collection: string, filter: string, limit?: number) => Promise<unknown>;
    insertTransaction: (transactionID: string, transaction: unknown, networkMap: NetworkMap, alert: unknown) => Promise<unknown>;
}
