<%
Class AppConfig
Dim XmlDom
Private Sub Class_Initialize()
Set XmlDom = Server.createobject("microsoft.xmldom")
XmlDom.load(Server.mappath("App.xml"))
End Sub
Private Sub Class_Terminate()
Set XmlDom = Nothing
End Sub
Function GetD(key,i)
GetD =XmlDom.getElementsByTagName(key)(i).text
End Function

Function GetLen()
GetLen = XmlDom.getElementsByTagName("account").length
End Function

Function SetD(key,len)
dim val
val = XmlDom.getElementsByTagName(key)(len).text
Response.Write val
XmlDom.getElementsByTagName(key)(len).text = val+1
End Function
Function AddD(node,key,val)
Set newnode=XmlDom.getElementsByTagName(node)(0).appendchild(XmlDom.createelement(key))
newnode.text = val
Set newnode=Nothing
XmlDom.save(Server.mappath("App.xml"))
End Function
Function DelD(key)
On Error Resume Next
XmlDom.getElementsByTagName(key)(0).parentNode.removechild(XmlDom.getElementsByTagName(key)(0))
XmlDom.save(Server.mappath("App.xml"))
End Function
End Class

dim i,len
i = 0
Set Config = new AppConfig

Call Config.SetD("account",0) ' 编辑节点
fuck = Config.GetLen()
if fuck = 4 then
fuck = 5
end if
Response.Write fuck&"<br />"
Response.Write fuck&"<br />"
Response.Write fuck&"<br />"
ReDim name(0),count(0)
len = 3
for a=0 to len
ReDim Preserve count(a)
count(a)=Config.GetD("account",a)
ReDim Preserve name(a)
name(a)=Config.GetD("name",a)
Response.Write name(a)
Response.Write count(a)&"<br />"


next

' 去掉相应的注释符,即可看到 [添加 / 编辑 / 删除] 节点的效果
'Call Config.AddD("Config","test","test") ' 添加节点
'Call Config.DelD("test") ' 删除节点
dim na(1)
na()0
Response.Write toJSON(na)
%>