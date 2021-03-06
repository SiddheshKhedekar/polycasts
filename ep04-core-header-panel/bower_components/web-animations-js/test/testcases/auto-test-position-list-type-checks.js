/**
 * Copyright 2017 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

timing_test(function() {
  at(0 * 1000, function() {
    assert_styles(".anim", [
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
      {'backgroundPosition':'0% 0%'},
    ]);
  });
  // TODO: Generate more inbetween values to compare against.
  at(2 * 1000, function() {
    assert_styles(".anim", [
      {'backgroundPosition':'0% 50%'},
      {'backgroundPosition':'50% 50%'},
      {'backgroundPosition':'100% 50%'},
      {'backgroundPosition':'50% 0%'},
      {'backgroundPosition':'50% 100%'},
      {'backgroundPosition':'10px 50%'},
      {'backgroundPosition':'20% 50%'},
      {'backgroundPosition':'0% 50%'},
      {'backgroundPosition':'50% 50%'},
      {'backgroundPosition':'100% 100%'},
      {'backgroundPosition':'100% 25%'},
      {'backgroundPosition':'10px 100%'},
      {'backgroundPosition':'10px 40px'},
      {'backgroundPosition':'0% calc(-10px + 100%)'},
      {'backgroundPosition':'50% 20%'},
      {'backgroundPosition':'100% 10px'},
      {'backgroundPosition':'100% 20%'},
      {'backgroundPosition':'20% 100%'},
      {'backgroundPosition':'10px 100%'},
      {'backgroundPosition':'40px calc(-10px + 100%)'},
      {'backgroundPosition':'20% 20%'},
      {'backgroundPosition':'calc(25% - 5px) 50%'},
      {'backgroundPosition':'calc(25% - 5px) 25%'},
      {'backgroundPosition':'50% calc(25% - 5px)'},
      {'backgroundPosition':'10px 10%'},
      {'backgroundPosition':'100% calc(75% + 5px)'},
      {'backgroundPosition':'10px calc(100% - 10px)'},
      {'backgroundPosition':'25% 25%'},
      {'backgroundPosition':'calc(25% - 5px) 10px'},
      {'backgroundPosition':'calc(75% + 5px) 10px'},
      {'backgroundPosition':'10px calc(75% + 5px)'},
    ]);
  });
}, "Auto generated tests");
