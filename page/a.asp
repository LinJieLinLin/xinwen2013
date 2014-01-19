<!--#include file="JSON_2.0.4.asp"-->
<%
dim a(1,1)


a(0,0) = "zero - zero"
a(0,1) = "zero - one"
a(1,0) = "one - zero"
a(1,1) = "one - one"

set objXmlDom=server.CreateObject("Microsoft.XMLDOM")
objXmlDom.async = false
fileStr = Server.MapPath("account.xml")
objXmlDom.load(fileStr)
NodesLength=objXmlDom.DocumentElement.ChildNodes.Length
response.Write(NodesLength&"<br>")
%>