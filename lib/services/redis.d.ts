/// <reference types="node" />
import Redis, { type Cluster } from 'ioredis';
import { type RedisConfig } from '../interfaces/RedisConfig';
type RedisData = string | number | Buffer;
export declare class RedisService {
    _redisClient: Redis | Cluster;
    private constructor();
    private init;
    /**
     * Create an instance of a ready to use RedisService
     *
     * @param {RedisConfig} config The required config to start a connection to Redis
     * @return {Promise<RedisService>} A Promise that resolves to a RedisService instance.
     */
    static create(config: RedisConfig): Promise<RedisService>;
    /**
     * Get the value stored as JSON for the given key from Redis.
     *
     * @param {string} key The key associated with the JSON value to retrieve.
     * @returns {Promise<string>} A Promise that resolves to the JSON value as a string.
     */
    getJson(key: string): Promise<string>;
    getBuffer(key: string): Promise<Record<string, unknown>>;
    /**
     * @deprecated Since version 1.2.4 Will be deleted in version 1.2.5. Use getMemberValues instead
     * Get the members of a Redis set stored under the given key.
     *
     * @param {string} key The key associated with the Redis set.
     * @returns {Promise<string[]>} A Promise that resolves to an array of set members as strings.
     */
    getMembers(key: string): Promise<string[]>;
    /**
     * Get the members of a Redis set stored under the given key.
     *
     * @param {string} key The key associated with the Redis set.
     * @returns {Promise<Record<string, unknown>[]>} A Promise that resolves to an array of set members as objects.
     */
    getMemberValues(key: string): Promise<Array<Record<string, unknown>>>;
    /**
     * Delete the entry associated with the given key from Redis.
     *
     * @param {string} key The key to be deleted from Redis.
     * @returns {Promise<void>} A Promise that resolves when the key is successfully deleted.
     */
    deleteKey(key: string): Promise<void>;
    /**
     * Store a JSON value in Redis under the given key with an optional expiration time.
     *
     * @param {string} key The key to associate with the JSON value in Redis.
     * @param {string} value The JSON value to store in Redis.
     * @param {number} expire The expiration time for the key (in seconds). Use 0 for no expiration.
     * @returns {Promise<void>} A Promise that resolves when the JSON value is successfully stored in Redis.
     */
    setJson(key: string, value: string, expire: number): Promise<void>;
    /**
     * Store a value in Redis under the given key with an optional expiration time.
     *
     * Much like `setJson()`, but without the JSON restriction,
     * This version accepts `Buffer` and `number` times in addition
     */
    set(key: string, value: RedisData, expire: number): Promise<void>;
    /**
     * Add a value to a Redis set under the given key.
     *
     * @param {string} key The key associated with the Redis set.
     * @param {RedisData} value The value to add to the Redis set.
     * @returns {Promise<void>} A Promise that resolves when the value is successfully added to the set.
     */
    setAdd(key: string, value: Record<string, unknown>): Promise<void>;
    /**
     * Add a value to a Redis set and then return all members from that set.
     *
     * @param {string} key The key associated with the Redis set.
     * @param {Record<string, unknown>} value The value to add to the Redis set.
     * @returns {Promise<string[]>} A Promise that resolves to an array of set members as strings.
     */
    addOneGetAll(key: string, value: Record<string, unknown>): Promise<Array<Record<string, unknown>>>;
    /**
     * Add a value to a Redis set and then return number of members in the set after the addition.
     *
     * @param {string} key The key associated with the Redis set.
     * @param {Record<string, unknown>} value The value to add to the Redis set.
     * @returns {Promise<string[]>} A Promise that resolves to an array of set members as strings.
     */
    addOneGetCount(key: string, value: Record<string, unknown>): Promise<number>;
    /**
     * Close the Redis connection and release associated resources.
     */
    quit(): void;
}
export {};
