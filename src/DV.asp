<!--#include file="JSON_2.0.4.asp"-->
<%
dim data
data = "你妹"
data=Request.Form("aa")

dim a(1,1)


a(0,0) = "zero - zero"
a(0,1) = "zero - one"
a(1,0) = "one - zero"
a(1,1) = "one - one"


Response.Write toJSON(a)
%>