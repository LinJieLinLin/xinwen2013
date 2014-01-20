<%

dim xml,objNode,objAtr,nCntChd,nCntAtr,k
Set xml=Server.CreateObject("Microsoft.XMLDOM")
xml.Async=False
xml.Load(Server.MapPath("account.xml"))

Set objNode=xml.documentElement

ReDim arr(0)



nCntChd=objNode.ChildNodes.length-1

'这个可以定义asp读取xml文件的那一个值，通过传递这个值来确定读取的数据



k=0
for i=0 to nCntChd
set objAtr=objNode.ChildNodes.item(i)
nCntAtr=objAtr.Attributes.length-1
for j=0 to nCntAtr
ReDim Preserve arr(k)
arr(k) = objAtr.Attributes.item(j).Text
k=k+1
response.write k
response.write objAtr.Attributes.item(j).Text&"<br>"
next
next



Set objAtr=Nothing
Set objNode=Nothing
Set xml=Nothing

%>