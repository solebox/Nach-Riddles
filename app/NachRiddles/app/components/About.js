import React, { Component } from 'react';
import {AppRegistry, View, Image,ScrollView, StyleSheet, Text, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class About extends Component {
  render() {
    return (
             <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          <View style={{height:60, backgroundColor:"#2196F3"}}>
            <Text style={styles.titleText}>אודות</Text>
          </View>
          <Text style={styles.lineText}>
          אפליקציה זאת נכתבה על הספר
          "אביעה חידות מני קדם" שכתב וערך דוד צברדלינג ז"ל.
{"\n"}
{"\n"}
          בספרו הוא מציין:
          {"\n"}
          אביעה חידות מני קדם הוא הוא חיבור של 1188 חידות בחרוזים על ספרי נביאים ראשונים, דניאל, עזרה ונחמיה.
          החיבור מחלק את ספרי הנביאים ל54 פרשיות - כמניין פרשיות התורה בכדי שבכל שבוע יהיה אפשר ללמוד לצד פרשת השבוע גם חלק מהנביא
          ואחר כך לענות על החידון ועל ידי כך להיות בקיאים יותר בנביא.
          {"\n"}
          {"\n"}
          בנוסף כותב הוא בקדמה לספרו:
          {"\n"}
          ברוך שבחר בנביאים טובים, וזיכני לכתוב חידונים, שכולם בחרוזים, למען נהיה בהם בקיאים. והתחלתי לעשות זאת יען כי הרגשתי שברוך ה' אני די בקיא בתורתו הקדושה, לדעת היכן נמצא פסוק פלוני ומי אמר למי פסוק אלמוני, אך הרגשתי שאין אני בקיא כן בנביא, ועל-כן לקחתי את הנביאים, המלמדים את קורות עם ישראל מכניסתם לארץ ועד שיבת ציון (יהושע, שופטים, שמואל, מלכים, דניאל, עזרא ונחמיה), וחלקתים ל-54 חלקים כמניין פרשיות התורה, ולכל חלק נתתי שם, כמו השמות של פרשיות התורה (כדי לזכור כל דיבור באיזו "פרשה" הוא נמצא), וסידרתי אותם מול פרשיות התורה למען אלמד בהם במשך השנה במקביל לפרשיות השבוע וכך אשלים מחזור בשמחת תורה ואתחיל מהתחלה כל שנה ואולי על-ידי כך אזכה לרכוש בקיאות בנביא, על-ידי החזרה כמו המחזור השנתי של קריאת התורה.
          {"\n"}
          {"\n"}
          והנה כמעט בכל שבוע מתכנסים חברֵי חדרי מישיבת "קול יעקב" המעטירה, לשמוע מפי חידון על פרשת השבוע שערך אותו הרב יהודה צימרוט בספרו "להתענג", וחברַי מראים שליטה ובקיאות נפלאה בפרשה ולכן הוסיף לי חברי היקר הבה"ח שלמה יוסף רווח שאולי כדי שאכתוב חידונים על הנביא כמו החידונים על הפרשה, והחידונים גם יעזרו לעשות חזרה על החומר וגם לחדד את השכל בבקיאות הנביא וכך השתדלתי לעשות.
          {"\n"}
          {"\n"}
          החידונים ערוכים לפי הא"ב כך שכל תשובה מתחילה באות אחרת לפי סדר הא"ב, וכמעט כל תשובות הן בעצם מילים מהפסוקים עצמם.
          {"\n"}
          {"\n"}
          חשוב להדגיש שיש ללמוד את כל ה"פרשה" לכל הפחות עם רש"י ומצודות ואחר כך ניתן לענות על החידות בקלות.
          {"\n"}
          {"\n"}
          קראתי לספר אביעה חידות מני קדם על שם הפסוק בתהלים עח,ב ששם מסביר המצודה: אומר דברים סתומים שנעשו בימי קדם.
          {"\n"}
          {"\n"}
          תודתי נתונה לבוחר בנביאים טובים ותפילתי אליו שאזכה לדעת את דבריהם של הנביאים ולהיות בקיא בהם, וכמובן תודה להוריי שנתנו לי את האמצעיים לעסוק בתורה ולישיבה הנפלאה שבה עליתי עוד ועוד, ישיבת "קול יעקב". תודה לרב יהודה צימרוט על ספרו הנפלא "להתענג" שכשמו כן הוא ומשם נולד הרעיון, וכן תודה לחברי היקר שהגה את הרעיון הנפלא שלמה יוסף רווח (וגם לחברֵי החדר שבאים לשמוע את חידון כמיטב המסורת של החדר). ולסיום חשוב להודות למי שהיו חברותות נהדרות בנביא, הרב חיים זוהר, והבה"ח עזרא עדס, שיזכו להמשיך ולעלות בתורה ובנביאים.
          {"\n"}
          {"\n"}
          דוד בן שלמה זלמן צברדלינג
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          להארות והערות:
          guy.zwerdling@gmail.com


          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    height: 45,
    width: 360,
    color: 'white',
    fontSize: 60,
    textAlign: 'center',
    backgroundColor: '#2196F3',
    fontFamily: 'nrkis',
  },
  lineText: {
    backgroundColor: 'white',
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'right',
  },


});

// skip this line if using Create React Native App
AppRegistry.registerComponent('About', () => About);
