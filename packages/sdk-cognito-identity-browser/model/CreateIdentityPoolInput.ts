import {_IdentityProviders} from './_IdentityProviders';
import {_OIDCProviderList} from './_OIDCProviderList';
import {_CognitoIdentityProviderList} from './_CognitoIdentityProviderList';
import {_SAMLProviderList} from './_SAMLProviderList';
import {Structure as _Structure_} from '@aws/types';

export const CreateIdentityPoolInput: _Structure_ = {
    type: 'structure',
    required: [
        'IdentityPoolName',
        'AllowUnauthenticatedIdentities',
    ],
    members: {
        IdentityPoolName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        AllowUnauthenticatedIdentities: {
            shape: {
                type: 'boolean',
            },
        },
        SupportedLoginProviders: {
            shape: _IdentityProviders,
        },
        DeveloperProviderName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        OpenIdConnectProviderARNs: {
            shape: _OIDCProviderList,
        },
        CognitoIdentityProviders: {
            shape: _CognitoIdentityProviderList,
        },
        SamlProviderARNs: {
            shape: _SAMLProviderList,
        },
    },
};