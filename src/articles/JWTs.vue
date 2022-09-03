<template>
    <div class="blog-article-container">
        <div 
            class="bg-right-top bg-cover flex flex-col sm:flex-row justify-end sm:justify-start"
            :style="{
                'background-image': 'url(\'/blog_lock.webp\')'
            }"
        >
            <div 
                class="flex flex-col
                text-ht-whiter
                sm:mt-16 sm:basis-2/3 self-end p-2 
                border-4 border-ht-dark-brown 
                backdrop-blur backdrop-contrast-100 backdrop-brightness-50"
            >
                <div class="text-2xl sm:text-3xl font-semibold ">
                    A Practical Guide To JWTs
                </div>
                <div class="text-lg sm:text-xl">
                    Some tips on JWT usage.
                </div>
            </div>
        </div>
        <ArticleHeader
            articleDate="August 2022"
            permalink="https://howdytaylor.com/blog/jwts"
        ></ArticleHeader>
        <div class="bg-ht-whiter mt-2">
            
            <div class="text-lg font-bold p-2 bg-ht-dark-brown text-ht-white shadow-lg">
                What is a JWT?
            </div>
            <div class="p-2">
                <p class="my-2 leading-relaxed">
                    While not a new concept, JSON Web Tokens were published as a proposed standard via 
                    <a class="underline text-blue-800 hover:text-blue-500" target="_blank" href="https://www.rfc-editor.org/rfc/rfc7519">IETF RFC 7519 in 2015.</a>
                </p>
                <p class="my-2 leading-relaxed">
                    A JSON Web Token is a bearer token. Typically used for authentication and authorization.
                    When used in this manner, these JWTs are technically considered bearer authentication tokens. 
                    This means whoever possesses the token possesses the authorization.
                </p>
                <p class="my-2 leading-relaxed">
                    JSON Web Tokens are constructed of three parts:
                    <ul class="ml-5 list-disc">
                        <li class="py-1 leading-relaxed">
                            <span class="font-semibold">Header</span> - This portion contains some metadata about the JWT, 
                            such as the type of the token, along with the algorithm used to encrypt it.
                            This data is provided in a convenient and easy to digest JSON format. <br>
                            Let's take a look at an example:
                            <div class="my-2 overflow-x-auto">
                                <pre class="overflow-x-auto"><code class="language-json">{{jwtHeaderExample}}</code></pre>
                            </div>
                            This example is typical of JWTs used for authorization. Its type (labeled typ) is "JWT", 
                            and its algorithm (labeled "alg") is an RSA type encryption algorithm.
                        </li>
                        <li class="py-1 leading-relaxed">
                            <span class="font-semibold">Payload</span> - This potion contains the actual token data, the purpose of the JWT.
                            This section contains JSON data, arranged in JSON key-value pairs. In a JWT, each key-value pair is called a "claim". <br>
                            Here is an example:
                            <div class="my-2 overflow-x-auto">
                                <pre class="overflow-x-auto"><code class="language-json">{{jwtPayloadExample}}</code></pre>
                            </div>
                            This payload showcases two types of claims:
                            <ul class="ml-5 list-disc">
                                <li class="py-1 leading-relaxed">
                                    <span class="font-semibold">Registered Claims</span> - These are claims that are meaningful to the JWT itself,
                                    registered claims are key-value pairs that must follow a defined standard. The registered claims for this JWT are:
                                    the "iss", "exp", and "jti" claims. Respectively, these are the claims for the name of the issuer ("iss"), the timestamp
                                    of the JWT's expiration ("exp"), and the JWT id ("jti").
                                </li>
                                <li class="py-1 leading-relaxed">
                                    <span class="font-semibold">Private Claims</span> - These claims are those that you make for your own purposes.
                                    In this case, the claims for "userID" and "otherData" are private claims. Generally speaking, these claim names can be
                                    anything that you would like, but they shouldn't collide with <a class="underline text-blue-800 hover:text-blue-500" target="_blank" href="https://www.iana.org/assignments/jwt/jwt.xhtml">any of the registered public claim names</a>.
                                </li>
                            </ul>
                        </li>
                        <li class="py-1 leading-relaxed">
                            <span class="font-semibold">Signature</span> - This portion contains a cryptographic signature of the claims made in the JWT.
                            Here is the signature for our example:
                            <div class="my-2">
                                <code class="language-text break-all">{{jwtSignatureExample}}</code>
                            </div>
                            The signature section is what makes a JWT useful, as the signature can be used to cryptographically confirm that the claims of the 
                            JWT have not been altered.
                        </li>
                    </ul>
                </p>
                <p class="my-2 leading-relaxed">
                    When provided to the client, the three parts of the JWT are encoded in base64 format and concatenated together with periods.
                    <br><br>
                    The final result looks like this: <br>
                    <code><span class="text-blue-700">header</span>.<span class="text-orange-700">payload</span>.<span class="text-purple-700">signature</span></code>
                    <div class="my-2">
                        <code class="language-text"><span class="text-blue-700 break-all">{{encodedJWTExample.header}}</span>.<span class="text-orange-700 break-all">{{encodedJWTExample.payload}}</span>.<span class="text-purple-700 break-all">{{jwtSignatureExample}}</span></code>
                    </div>
                </p>
                <p class="my-2 leading-relaxed">
                    It is critical to notice that this means that the actual payload of a JWT is not encrypted. Carefully consider what this means.
                    A JWT's payload should never contain sensitive information.
                </p>
            </div>
            <div class="text-lg font-bold p-2 bg-ht-dark-brown text-ht-white shadow-lg">
                How JWTs Are Used
            </div>
            <div class="p-2">
                Let's consider the case of a full-stack web application with the following authentication flow:
                <ul class="ml-5 list-decimal">
                    <li class="py-1 leading-relaxed">
                        The user goes to the web application and performs a login.
                    </li>
                    <li class="py-1 leading-relaxed">
                        The login request is sent to the authentication server to grant the user authorization to access some resources.
                    </li>
                    <li class="py-1 leading-relaxed">
                        The authentication server sends back a JWT stored in a cookie which grants the user access to those resources.
                    </li>
                    <li class="py-1 leading-relaxed">
                        The user then sends a request to access the restricted resources.
                    </li>
                    <li class="py-1 leading-relaxed">
                        Upon receipt of the request, the restricted resource checks with the authentication service to verify that the 
                        JWT is valid and that the user is allowed to access the resource in question.
                    </li>
                    <li class="py-1 leading-relaxed">
                        If the authentication service responds affirmatively, the restricted resource is then provided to the client in question.
                    </li>
                </ul>
            </div>
            <div class="text-lg font-bold p-2 bg-ht-dark-brown text-ht-white shadow-lg">
                Some Important Points
            </div>
            <div class="p-2">
                <ul class="ml-5 list-disc">
                    <li class="py-1 leading-relaxed">
                        <span class="font-semibold">Never Assume a JWT To Be Valid</span> - Any JWT which enters the system should be examined with
                        full scrutiny. It's cryptographic signature should be verified and it's status should be checked.
                    </li>
                    <li class="py-1 leading-relaxed">
                        <span class="font-semibold">Every Request Requires A JWT</span> - All restricted resource requests require a JWT, without exception.
                        No source, destination, or endpoint should be considered trusted via any method other than the provision of a legitimate JWT.
                    </li>
                    <li class="py-1 leading-relaxed">
                        <span class="font-semibold">Make Use of A JSON Token ID To Create a Whitelist</span> - Explict whitelists should be used.
                        This whitelist should be checked for every request to ensure that the JWT being presented is valid. Whitelisting JWT token ids
                        also grants important revokation benefits; if a user JWT is ever compromised, there exoists a mechanism to allow the 
                        permanent and instantaenous revokation of that JWT. JWTs should live only long enough to meet their session requirement. 
                        When a user logs out, the JWT issued to their session should be revoked. This is also useful if a user resets their password, 
                        as you can revoke all of the JWTs granted to their user across all sessions. Perhaps you can think of other situations in which
                        this might be useful, such as non-payment for SaaS systems.
                    </li>
                    <li class="py-1 leading-relaxed">
                        <span class="font-semibold">JWTs Should Be Stored In Cookies</span> - Cookies are still the safest storage method we have as
                        web designers. Backed by the browsers security, a cookie with HTTP only, a strict samesite policy, and the secure flag enabled
                        is as secure a token as it is possible for us to provide. It is important that we use all of these cookie options to ensure
                        that we have done everything in our power to prevent the leakage of our JWT to a bad actor.
                    </li>
                    <li class="py-1 leading-relaxed">
                        <span class="font-semibold">Use Authentication Middleware</span> - Nearly all REST API frameworks have the ability to handle
                        authentication as middleware work, before the actual resource even sees the request. Utilize this feature, authentication is
                        not an afterthought, it's the first priority. If the user isn't authorized, don't prevent the response, prevent the request.
                    </li>
                </ul>
            </div>
            <div class="text-lg font-bold p-2 bg-ht-dark-brown text-ht-white shadow-lg">
                Caveats and Notes
            </div>
            <div class="p-2">
                <ul class="ml-5 list-disc">
                    <li class="py-1 leading-relaxed">
                        <span class="font-semibold">A Few Notes On Whitelists</span> - High request volume architectures should consider the
                        implementation of an in-memory key-value datastore for JWT whitelist management. Consider Redis or Memcached. 
                        Smaller architectures of &lt; 10,000 requests per minute will find that a properly managed traditional database is more than fast enough.
                    </li>
                    <li class="py-1 leading-relaxed">
                        <span class="font-semibold">Encrypted JWTs Can Mean Trouble</span> - JWTs can be encrypted, but that doesn't mean they should.
                        In my experience, finding encrypted JWTs has meant that the developers were using the JWTs to store sensitive information.
                        Information that should have been stored in the whitelist record for this JWT. It also typically meant that they trusted the JWT
                        to contain valid, up-to-date sensitive information, which is rarely universally true. Avoid storing anything in a JWT which you feel is
                        sensitive enough to require encryption, as that is a sign that the information should be locked behind the metadata in a whitelist lookup,
                        retrieved for use at the requested resource only after the JWT is validated.
                    </li>
                    <li class="py-1 leading-relaxed">
                        <span class="font-semibold">Use An Asymmetric Cryptographic Key</span> - As architectures scale, it can become tempting to spread
                        the verification of these JWTs across resources. With an asymmetric key, we can provide relief to this pressure without allowing for the
                        generation of rouge JWTs throughout the system. Allowing resources to use the public key to verify the authenticity of the JWT without
                        concern that the resource holds the private key, which if compromised would be problematic. The existence of a public key also allows
                        for deep integration with third-party services if the opportunity were to arise.
                    </li>
                </ul>
            </div>
        </div>
        <ArticleFooter></ArticleFooter>
    </div>
</template>

<script>
import ArticleHeader from '../components/subcomponents/ArticleHeader.vue';
import ArticleFooter from '../components/subcomponents/ArticleFooter.vue';

export default {
    components:{
    ArticleFooter,
    ArticleHeader
},
    data() {
        return {
            jwtPayloadExample: null,
            jwtHeaderExample: null,
            jwtSignatureExample: null,
            encodedJWTExample: {
                header: null,
                payload: null
            }
        }
    },
    methods: {
    },
    beforeMount(){
        this.jwtHeaderExample = `{
    "alg": "RS512",
    "typ": "JWT"
}`
        this.jwtPayloadExample = `{
    "iss": "exampleAuthenticationAPI",
    "exp": "1661731200",
    "jti": "38967493-fcc9-4d17-9e56-9c57abd3db10",
    "userID": "aa8b72f5-4811-42f3-8dca-f23ab0693927",
    "otherData": "something else"
}`
        this.jwtSignatureExample = `WJYBbZxlXdk0em-4NA_EyARK8hxkxSqWxngYBcDeduJvS6F4M6W9OFNZef0bP7XPdG7GtEMWy09c8S91jHwBDB_ucFvrA7nGbTpEJZOaJhUjkXIxW1McXhB0BaOYHEXL5gpUWD1RQm-XfaXS-4QS2jg5WaUVPzxxh-jRVC5DqLdRdc1f2-TkKpELjhRhBfFAyoiGVikZT_1d0hkrJ7jteAFmAEHipajDJSpoNzA8_M4Wg6rk5Hfec3GglkCP_cHffgReCaCm_RZ53aE8Vmf-JKPyvQbh-IdvQZLkCqkEMs9NgYlKYGOjk386wIqcyKlW4iYtevidOHVjpaG8cmfGw`;
        this.encodedJWTExample = {
            header: `eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9`,
            payload: `eyJpc3MiOiJleGFtcGxlQXV0aGVudGljYXRpb25BUEkiLCJleHAiOiIxNjYxNzMxMjAwIiwianRpIjoiMzg5Njc0OTMtZmNjOS00ZDE3LTllNTYtOWM1N2FiZDNkYjEwIiwidXNlcklEIjoiYWE4YjcyZjUtNDgxMS00MmYzLThkY2EtZjIzYWIwNjkzOTI3Iiwib3RoZXJEYXRhIjoic29tZXRoaW5nIGVsc2UifQ`
        } 
    },
    mounted(){
        hljs.highlightAll();
    }
}
</script>

<style scoped>

</style>