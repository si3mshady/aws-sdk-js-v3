import {_UnmarshalledDelegationSet} from './_DelegationSet';
import * as __aws_types from '@aws/types';

/**
 * CreateReusableDelegationSetOutput shape
 */
export interface CreateReusableDelegationSetOutput {
    /**
     * <p>A complex type that contains name server information.</p>
     */
    DelegationSet: _UnmarshalledDelegationSet;

    /**
     * <p>The unique URL representing the new reusable delegation set.</p>
     */
    Location: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}