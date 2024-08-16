/**
 * ...............................
 * make api secure
 * .................................
 * 
 * concept: api secure concept by jwt
 * 1. assign two tokens for each parson (access token, refresh token)
 * 2. access token contains: user identification (email, role, etc). valid for a shorter duration
 * 3. refresh token is used: to recreate an access token that was expired 
 * 4. if refresh is invalid then logout the user
 * 
 */

/**
 *  jwt ....> json web token
 * 1. create api and generate a token thetn set to cookie. httpOnly, secure, sameSite
 * 2. form slient side: axios withCredentials: true
 * 3. cors setup origin and credentials:true
 */

/**
 * for secure api calls
 * 1. server side: install cookie parser and use it as middleware
 * 2. req.cookies
 * 3. on the client side: make api call using axios withCredentials: true oorrr crendentials: 'inclueds' while using fetch
 * 
 */